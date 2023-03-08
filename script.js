const payBtn = document.getElementById('payment-btn')
const paymentContainer =  document.getElementById('payment-container')
const confirmContainer = document.getElementById('confirm-container')
const invoiceContainer = document.getElementById('invoice-container')
const takeMeBack = document.getElementById('take-me-back')
const confirmBtn =  document.getElementById('confirm-btn')
const successPop = document.getElementById('success-popup')
const invoiceAmt = document.getElementById('invoice-amt')
const invoiceTotalAmt = document.getElementById('invoice-total-amt')

payBtn.addEventListener('click', confirmPopUp)
function confirmPopUp(){
  paymentContainer.style.visibility = "hidden"
  confirmContainer.style.visibility = "visible"
} 

takeMeBack.addEventListener('click', takeBack)
function takeBack(){
  paymentContainer.style.visibility = "visible"
  confirmContainer.style.visibility = "hidden"
}

confirmBtn.addEventListener('click', confirmPayment)
function confirmPayment(){
  confirmContainer.style.visibility = "hidden"
  successPop.style.visibility = "visible"
  setTimeout(() => {
    successPop.style.visibility = "hidden"
    invoiceContainer.style.visibility = "visible"
  }, 3000)
}

function captureAmt(){
    const paymentPageAmt = document.getElementById('amt').value
    const platformFee = 10
    invoiceAmt.innerText = paymentPageAmt
    invoiceTotalAmt.innerText = parseInt(paymentPageAmt) + platformFee
}