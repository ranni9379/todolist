//querySelector=> HTML의 모든것을 선택할 수 있음; 태그이름, 클래스명,아이디명 모두 선택가능 선택할때 css규칙을 따라서 작성함
//예) class='newClass' =>'.newClass'
//id='newId'=>'#id'
//ul div => 'ul div'
//ul div.newClass=>'ul div.newClass'
//getElementById=>
//innerHTML=> 해당태그안에 새로운 자식요소를 넣을 떄 사용함 이떄 자식요소는 태그들 문자열에 담아서 사용해도 되지만 변수를 같이 사용하려면 ``사용해서 하면 개꿀

// const name = "한우+++ 4팩";
// const btn = "삭제";

// ul.innerHTML = `<li><div>
// <p>${name}</p>
// <button>${btn}</button></div></li>`;

let list = ["우유", "계란", "유부초밥", "한우++"];

const rendering = () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  for (
    let i = 0;
    i < list.length;
    i = i + 1 // i+=1//i++
  ) {
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.onclick = () => {
      //   console.log("hello its ms", list[i]);

      list.splice(i, 1);
      console.log(list);

      rendering();
    };
    const p = document.createElement("p");
    p.innerText = list[i];
    const div = document.createElement("div");

    div.append(p, button);
    const li = document.createElement("li");
    li.append(div);

    ul.append(li);
  }

  //   console.log(`${button}`);
  //   const tag = `

  //     <li>
  //     <div><p>${list[i]}</p>
  //     <button id="d">삭제</button>
  //     </div>
  //     </li>
  //     `;
  //   console.log(tag);
  //   console.log(list[i]);

  //   li = `${li}${tag}`;
  // }

  // // console.log(li);
  // console.log(text)

  //   li += tag;

  // ul.innerHTML = li;
  // const d = document.getElementById("d");

  // d.onclick = () => {
  //   console.log("삭제준비완료");
  // };
};
rendering();

const form = document.querySelector("form");
const input = document.getElementById("item");

form.addEventListener(
  "submit",

  (event) => {
    event.preventDefault(); //새로고침 방지 // form 태그 한정
    // console.log(event);

    const item = input.value;
    if (item.length === 0) {
      alert(" 장 볼 물건을 입력해주세요.");
      return input.focus();
    }
    // console.log(item);
    // list.push();
    list.unshift(item);
    // console.log(list);

    rendering();
    input.value = "";
  }
);
