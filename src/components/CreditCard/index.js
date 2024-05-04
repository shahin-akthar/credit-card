// Write your code here
import {useState} from 'react'
import {
  DivContainer,
  CreditCardContainer,
  CardHeading,
  CardImg,
  CardNumber,
  NameHeading,
  Name,
  PaymentContainer,
  PaymentCard,
  NumberInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [holderName, setName] = useState('')

  const addNumber = event => {
    setNumber(event.target.value)
  }
  const addName = event => {
    setName(event.target.value)
  }

  return (
    <DivContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardImg data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <Name>{holderName}</Name>
        </CardImg>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentCard>
          <h1>Payment Method</h1>
          <NumberInput
            placeholder="Card Number"
            value={cardNumber}
            onChange={addNumber}
          />
          <NameInput
            placeholder="Cardholder Name"
            value={holderName}
            onChange={addName}
          />
        </PaymentCard>
      </PaymentContainer>
    </DivContainer>
  )
}

export default CreditCard
