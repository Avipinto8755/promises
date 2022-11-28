////מערך של פוסטים
let posts = [
  { id: 1, body: "aaaaaa" },
  { id: 2, body: "bbbbb" },
  { id: 3, body: "ccccc" },
];
////מערך של כתבות
let comments = [
  { idPost: 2, body: "dddddd" },
  { idPost: 1, body: "eeeeeee" },
  { idPost: 3, body: "ffffff" },
  { idPost: 1, body: "ggggggg" },
  { idPost: 1, body: "hhhhhhh" },
  { idPost: 3, body: "iiiiiii" },
];
///יוצר הבטחה שמחזירה את הפוסטים
let promise1 = new Promise((resolve) => {
  resolve(posts);
});
////פונקציה שמחזירה הבטחה חדשה לאחר שההבטחה הראשונה התקיימה
function load(posts) {
  return new Promise((resolve) => {
    resolve([posts, comments]);
  });
}
/////פונקציה שמדפיסה את הפוסטים והתגובות לדף לאחר שהיא ממינת את התגובות לפוסטים התואמים לפי המספר פוסט
function printToHtml(data) {
  data[0].forEach((element) => {
    data[1].forEach((el) => {
      if (element.id == el.idPost) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = " post number " + element.id + " comment: " + el.body;
        div.appendChild(p);
        document.body.appendChild(div);
      }
    });
  });
}

////שרשור של הפרומיסים
promise1.then(load).then(printToHtml);
