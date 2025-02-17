export function formatDuration(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  if (hours > 10)
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  else return `${formattedMinutes}:${formattedSeconds}`;
}

export async function parseAudios(audios) {
  const parseAudios = [...audios];
  for (let i = 0; i < audios.length; ++i) {
    parseAudios[i].meta = await audioMeta(parseAudios[i]);
  }
  return parseAudios;
}

export function audioMeta(audio) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    jsmediatags.read(audio.src, {
      onSuccess: function (meta) {
        console.log(meta);
        const toReturn = {};

        // artist
        if (meta.tags.artist) toReturn.artist = meta.tags.artist;
        // genre
        if (meta.tags.genre) toReturn.genre = meta.tagsgenre;
        // title
        if (meta.tags.title) toReturn.title = meta.tags.title;
        else {
          if (audio.title) toReturn.title = audio.title;
          else {
            const currentSrc = audio.src;
            toReturn.title = currentSrc.split("/").pop().split("?")[0];
          }
        }

        // Obtener imagen si existe en los metadatos
        if (meta.tags.picture) {
          const image = meta.tags.picture;
          const base64String = image.data.reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "");
          const base64 =
            "data:" + image.format + ";base64," + window.btoa(base64String);
          toReturn.image = base64;
        }

        resolve(toReturn);
      },
      onError: function (error) {
        reject(error); // Devolver el error si ocurre
      },
    });
  });
}
