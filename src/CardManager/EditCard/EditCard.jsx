import React, { Fragment, useCallback, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../../components/Card"
import CardForm from "../../components/CardForm"
import { fetchCreditCardList, updateLocalStorageCards } from "../CreditCard"

const initialState = {
  id: "",
  cardNumber: "",
  cardHolder: "",
  cardMonth: "",
  cardYear: "",
  cardCvv: ""
}

export default function EditCard() {
  const { id: parmId } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState(initialState)
  const [cardsData, setCardsData] = useState([])
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  useEffect(() => {
    fetchData()
  }, [parmId])

  async function fetchData() {
    const cards = await fetchCreditCardList()
    setCardsData(cards)
    if (cards && cards.length > 0) {
      const selectedCard = cards.find(card => card.id === parmId)
      setState(selectedCard ?? initialState)
    }
  }

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || ""
      })
    },
    [state]
  )

  function handleSubmitAction() {
    try {
      const cards = cardsData
      const selectedCard =
        cards.find(card => card.id === parmId) ?? initialState
      const selectedCardIndex = cards.indexOf(selectedCard)
      cards[selectedCardIndex] = state
      updateLocalStorageCards(cards)
      navigate("/")
    } catch (error) {
      alert(error)
      console.log(error)
    } finally {
      //release resources or stop loader
    }
  }

  function handleDeleteAction() {
    try {
      if (confirm("Are you sure you want to delete this card?") === false) {
        return
      }

      const cards = cardsData
      const selectedCard =
        cards.find(card => card.id === parmId) ?? initialState
      const selectedCardIndex = cards.indexOf(selectedCard)
      cards.splice(selectedCardIndex, 1)
      updateLocalStorageCards(cards)
      navigate("/")
    } catch (error) {
      alert(error)
      console.log(error)
    } finally {
      //release resources or stop loader
    }
  }

  return (
    <Fragment>
      <div className="add-card-content">
        <div className="wrapper">
          <CardForm
            selectedCreditCard={state}
            onUpdateState={updateStateValues}
            setIsCardFlipped={setIsCardFlipped}
            handleSubmitAction={handleSubmitAction}
          >
            <Card
              cardNumber={state.cardNumber}
              cardHolder={state.cardHolder}
              cardMonth={state.cardMonth}
              cardYear={state.cardYear}
              cardCvv={state.cardCvv}
              isCardFlipped={isCardFlipped}
            ></Card>
          </CardForm>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={3} className="">
            <div className="d-grid gap-1 delete-card">
              <Button variant="link" size="lg" onClick={handleDeleteAction}>
                Delete Card
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
