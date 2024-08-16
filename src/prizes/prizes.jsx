import spinner from "./spinners";

const prizes = [
  {
    uuid: "09d52332-4707-46e4-82d6-63cb971eaf4b",
    image: "https://i.ibb.co/M1XDbSG/30-nihuya.png",
    text: "Нихуя",
    description: "Реально нихуя",
    chance: [1, 30],
    spinnerImage: spinner.grey,
  },
  {
    uuid: "b3b50aaf-8a3e-4129-a69e-8a540ef3e3d7",
    image: "https://i.ibb.co/XbFtMhC/10-otzhimaniya.png",
    text: "Качалка",
    description: "10 анжуманий (man) 15 приседаний (woman)",
    chance: [31, 40],
    spinnerImage: spinner.red,
  },
  {
    uuid: "9352a077-e627-43a6-b876-d6d7f1ea230b",
    image: "https://i.ibb.co/vdXj8VC/10-100grn.png",
    text: "100 грн",
    description: "100 грн на карту (Нихуя для Вадима)",
    chance: [41, 50],
    spinnerImage: spinner.green,
  },
  {
    uuid: "e2e2234c-528b-4334-9d6b-ecb3dba17d68",
    image: "https://i.ibb.co/gtdd774/4-water.png",
    text: "Водный баланс",
    description: "Вьебать воды",
    chance: [51, 60],
    spinnerImage: spinner.blue,
  },
  {
    uuid: "33f0c4ab-e136-49de-9f50-1e62c4856496",
    image: "https://i.ibb.co/k6pmHPn/10-stopka.png",
    text: "Фриспин",
    description: "Вьебать еще одну стопку водки и еще раз прокрутить",
    chance: [61, 70],
    spinnerImage: spinner.red,
  },
  {
    uuid: "f9d4f9fb-4716-4390-96d8-10657119a9af",
    image: "https://i.ibb.co/j3PRbtF/10-music.png",
    text: "Пошла жара",
    description: "Включение любого трека вне очереди",
    chance: [71, 80],
    spinnerImage: spinner.green,
  },
  {
    uuid: "24976855-bc85-4c96-af49-0e0b8af9ac82",
    image: "https://i.ibb.co/YXvqs1h/10-donate.png",
    text: "Донат",
    description: "Донат 20 грн на любой сбор (украинский)",
    chance: [81, 90],
    spinnerImage: spinner.green,
  },
  {
    uuid: "c5842b64-36ea-4b5f-a83e-a3f296ba9e39",
    image: "https://i.ibb.co/4R0v6HX/10-zhopa.png",
    text: "Жопа",
    description: "Показать всем жопу (девочки показывают жопу своего man'a)",
    chance: [91, 95],
    spinnerImage: spinner.red,
  },
  {
    uuid: "79c9b7b0-82ff-4dc4-8642-6cc65db435d0",
    image: "https://i.ibb.co/4KTv1hN/5-supermegadrive.png",
    text: "Super Mega Drive",
    description: "Въебать супермегадрайв коктейл",
    chance: [96, 99],
    spinnerImage: spinner.purple,
  },
  {
    uuid: "759f2ebe-3b26-44d7-927d-c521df47eef2",
    image: "https://i.ibb.co/zsF4ks4/1-1000grn.png",
    text: "Контора платит",
    description: "1000 грн на карту",
    chance: [100, 100],
    spinnerImage: spinner.yellow,
  },
];

export default prizes;
