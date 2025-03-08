const display = document.getElementById("hello");

const hello_list = [
  { hello: "Hi", person: "English" },
  { hello: "Servus", person: "Austrian" },
  { hello: "Bonjour", person: "French" },
  { hello: "Hola", person: "Spanish" },
  { hello: "Ciao", person: "Italian" },
  { hello: "Hallo", person: "German" },
  { hello: "Hej", person: "Swedish" },
  { hello: "Hei", person: "Finnish" },
  { hello: "Ahoj", person: "Czech" },
  { hello: "Olá", person: "Portuguese" },
  { hello: "Привет", person: "Russian" },
  { hello: "안녕하세요", person: "Korean" },
  { hello: "こんにちは", person: "Japanese" },
  { hello: "你好", person: "Chinese" },
  { hello: "Merhaba", person: "Turkish" },
  { hello: "Γεια σας", person: "Greek" },
  { hello: "Shalom", person: "Hebrew" },
  { hello: "नमस्ते", person: "Hindi" },
  { hello: "வணக்கம்", person: "Tamil" },
  { hello: "สวัสดี", person: "Thai" },
  { hello: "Selam", person: "Amharic" },
  { hello: "Xin chào", person: "Vietnamese" },
  { hello: "Sveiki", person: "Latvian" },
  { hello: "Dia dhuit", person: "Irish" }
];

function SayHello() {
  const listLength = hello_list.length;
  const randVal = hello_list[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<p>${randVal.hello} - <i>${randVal.person}</i></p>`;
}
