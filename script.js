
  const video = document.getElementById('baristaVideo');
  const btn = document.getElementById('videoControlBtn');

  

  // ==== Quiz Script ====
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const quizFeedback = document.getElementById('quiz-feedback');
  
    if (quizForm) {
      quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selected = document.querySelector('input[name="quiz"]:checked');
  
        if (!selected) {
          quizFeedback.textContent = "❗ Please select an answer.";
          quizFeedback.style.color = "red";
          return;
        }
  
        const answer = selected.value;
        if (answer === "Ethiopia") {
          quizFeedback.textContent = "✅ Correct! Ethiopia is the birthplace of coffee.";
          quizFeedback.style.color = "green";
        } else {
          quizFeedback.textContent = "❌ Incorrect. Try again!";
          quizFeedback.style.color = "red";
        }
      });
    }
  //===payment===//
  
    function displayInlineError(msg) {
      let errorDiv = document.getElementById('inline-error');
      if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'inline-error';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '10px';
        document.getElementById('paymentForm').appendChild(errorDiv);
      }
      errorDiv.textContent = msg;
    }
  });
  
  const cart = [];
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-btn" data-index="${index}">❌</button>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        cart.splice(index, 1);
        updateCartUI();
      });
    });
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const name = this.getAttribute('data-name');
      const price = parseFloat(this.getAttribute('data-price'));
      cart.push({ name, price });
      updateCartUI();
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    const paymentSuccessMsg = document.getElementById('payment-success');

    paymentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const cardNumber = document.getElementById('cardNumber').value.trim();
      const name = document.getElementById('name').value.trim();

      if (cardNumber.length >= 16 && name !== '') {
        paymentSuccessMsg.style.display = 'block';
        paymentSuccessMsg.textContent = '✅ Payment Successful! Thank you for your order.';
        paymentForm.reset();

        setTimeout(() => {
          paymentSuccessMsg.style.display = 'none';
        }, 4000);
      } else {
        alert('❌ Please enter a valid 16-digit card number and your name.');
      }
    });
  });


