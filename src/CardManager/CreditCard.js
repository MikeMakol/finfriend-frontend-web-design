//Data Layer
export class CreditCardAPI {
  async fetchCreditCardList() {
    const apiData = [
      {
        id: "ff646567-484e-4eb7-961f-977f7c728eb9",
        cardNumber: "1111123415661156",
        cardHolder: "Mike Makol",
        cardMonth: "01",
        cardYear: "2023",
        cardCvv: "1111"
      },
      {
        id: "b8262cc8-6506-46f2-925a-819729b224ec",
        cardNumber: "2222222222222222",
        cardHolder: "John Doe",
        cardMonth: "02",
        cardYear: "2024",
        cardCvv: "2222"
      }
    ]
    let creditCardsList = []
    //first check local storage if local storage is empty then add api mock data as seed
    if (localStorage.getItem("cards")) {
      const localStorageData = JSON.parse(localStorage.getItem("cards") ?? "")
      creditCardsList = [...localStorageData]
    } else {
      creditCardsList = [...apiData]
      updateLocalStorageCards(creditCardsList)
    }

    return creditCardsList

    // api = new Api(); //it will have all Restful verbs functions
    // return axios.get(`http://localhost:9292`)
    // .then((res: { data: any; }) => {
    //   return res.data;
    // });
  
  }
} //CreditCardAPI Class End

//Business Layer
export async function fetchCreditCardList() {
  const api = new CreditCardAPI()
  return api.fetchCreditCardList()
}
export function updateLocalStorageCards(cards) {
  localStorage.setItem("cards", JSON.stringify(cards))
}
