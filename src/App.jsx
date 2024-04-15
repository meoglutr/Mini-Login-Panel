import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [access, setAcces] = useState("");

  useEffect(() => {
    console.log(users);
  }, [users]);

  const createUser = () => {
    if (userName.trim() !== "" && userPassword.trim() !== "") {
      if (userName.length < 12 && userName.length > 3) {
        if (users.some((user) => user.name === userName)) {
          setAcces("aynı kullanici adına sahip başka bir kullanıcı mevcut");
        } else {
          const newUser = {
            id: Math.random() * 100,
            name: userName.trim(),
            password: userPassword,
          };
          setUsers([...users, newUser]);
        }
      } else {
        setAcces(
          "kullanici adi 12 karakterden küçük ve 3 karakterden büyük olmalı"
        );
      }
    } else if (userName == "" && userPassword == "") {
      setAcces("kullanici Adi  ve Şifre Zorunlu bir alandır");
    } else if (userPassword == "") {
      setAcces("Şifre Zorunlu bir alandır");
    } else if (userName == "") {
      setAcces("kullanici Adi Zorunlu bir alandır");
    }
  };

  const login = () => {
    const userControl = users.some(
      (user) => user.name === userName && user.password === userPassword
    );
    if (userControl) {
      setAcces("Başarılı Giriş Yapıldı");
    } else if (userName !== "" && userPassword !== "") {
      setAcces("Şifre Veya Kullanıcı Adı Hatalı");
    } else if (userName == "" || userPassword == "") {
      setAcces("Lütfen Bir Kullanıcı Adı veya Şifre Giriniz");
    }
  };

  return (
    <>
      <div className=" flex w-full h-screen bg-gradient-to-br from-purple-500 to-blue-500 items-center justify-center ">
        <div className="w-[500px] h-[500px] border   flex flex-col items-center justify-center bg-white rounded-lg  text-blue-500">
          <div>{access && <label className="text-lg">{access}</label>}</div>
          <div className=" flex-col justify-center items-center mt-5 ">
            <label className="flex justify-center  font-bold">
              Kullanıcı Adı
            </label>
            <input
              placeholder="Kuallıcı Adınız"
              className=" flex border mt-2  text-center  text-black"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex- justify-center items-center mt-4">
            <label className="flex justify-center font-bold">Şifre</label>
            <input
              placeholder="Şifreniz"
              className=" flex border mt-2 text-center text-black"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className=" flex-col m-4 text-white pl-3">
            <div>
              <button
                className="border bg-gradient-to-br from-purple-500 to-blue-500 mr-3 w-32 "
                onClick={login}
              >
                Giriş Yap
              </button>
            </div>
            <div>
              <button
                className="border  w-32 mt-4  bg-gradient-to-br from-purple-500 to-blue-500  "
                onClick={createUser}
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
