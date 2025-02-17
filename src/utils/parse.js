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

export function audioMeta(audio) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    jsmediatags.read(audio.src, {
      onSuccess: function (tag) {
        const toReturn = {};

        // artist
        if (tag.artist) toReturn.artist = tag.artist;
        // genre
        if (tag.genre) toReturn.genre = tag.genre;
        // title
        if (tag.title) toReturn.title = tag.title;
        else {
          if (audio.title) return resolve({ title: audio.title });
          const currentSrc = audio.currentSrc;
          toReturn.title = currentSrc.split("/").pop();
        }

        // Obtener imagen si existe en los metadatos
        if (tag.tags.picture) {
          const image = tag.tags.picture;
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
