// Style your elements here
import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'Roboto';
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardHeading = styled.h1`
  font-size: 35px;
  font-weight: 550;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  padding-top: 80px;
`

export const CardImg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  margin-top: 150px;
  height: 280px;
  width: 480px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`

export const CardNumber = styled.p`
  font-size: 30px;
  font-weight: 550;
`

export const NameHeading = styled.p`
  font-size: 15px;
  font-weight: 400;
`

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`

export const PaymentContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PaymentCard = styled.div`
  background-color: white;
  color: #475569;
  box-shadow: 0 0 20px 0 #d3d9e0;
  align-self: center;
  margin: auto;
  height: 280px;
  width: 450px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NumberInput = styled.input`
  border: 1px solid #c3cad9;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 15px;
`

export const NameInput = styled.input`
  border: 1px solid #c3cad9;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 15px;
`
