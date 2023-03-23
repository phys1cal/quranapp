fetch("https://api.quran.com/api/v4/chapters?language=en")
  .then((res) => res.json())
  .then((data) => {
    let chapters = data.chapters;
    chapters.forEach((chapters) => {
      const markup = `<li>  <div class="bg-stone-800/[.500] p-5 rounded-xl my-5 "> <div class="flex gap-2">  <button class='play' data-chapter='${chapters.id}' data-chapterEn='${chapters.name_complex}' data-chapterAra='${chapters.name_arabic}' ><img src="play-circle-o.svg" 
                                         class="h-8 my-2 justify-items-end" alt=""></button> <div class=""> ${chapters.name_complex} <p class="text-blue-500 arabic"> ${chapters.name_arabic} </p> </div> </div><p class="text-right text-red-500"> ${chapters.translated_name.name}</p> </div > </li>`;
      document.querySelector("ol").insertAdjacentHTML("beforeend", markup);
    });
  });

function rename(chapter) {
  if (chapter.length == 1) {
    return `00${chapter}`;
  } else if (chapter.length == 2) {
    return `0${chapter}`;
  } else {
    return chapter;
  }
}

setTimeout(() => {
  let allPlay = document.querySelectorAll(".play");
  allPlay.forEach((play) => {
    let url = `http://server8.mp3quran.net/ayyub/`;
    let chapter = play.getAttribute("data-chapter");
    let chapterEn = play.getAttribute("data-chapteren");
    let chapterAra = play.getAttribute("data-chapterara");
    chapter = rename(chapter);
    // console.log(url)
    play.addEventListener("click", () => {
      let aud = document.querySelector("#aud");

      aud.src = `${url}${chapter}.mp3`;
      aud.play();
      //   document.querySelector("#aud").src = `${url}${chapter}.mp3`;
      console.log(play);
      document.getElementById("changeChapter").innerHTML = `${chapterEn}`;
      document.getElementById("changeChapterAra").innerHTML = `${chapterAra}`;
    });
  });
}, 1000);
