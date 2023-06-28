<template>
    <h1 class="text-center pt-5 display-5 fw-bold">Contact Us!</h1>
            <p class="text-center fs-5">We are always seeking feedback from our customers, as we believe that their input is crucial in shaping our offerings and improving our services.</p>

            <form action="https://formspree.io/f/xknayprg"
            method="POST" class="row g-3 p-3 w-50 m-auto" id="form">
                <div class="col-6 fs-5">
                  <input type="text" class="form-input" id="First-name" placeholder="First Name Here" required>
                </div>
                <div class="col-6 fs-5">
                  <input type="text" class="form-input" id="last-Name" placeholder="Last Name Here" required>
                </div>
                <div class="col-12 fs-5">
                    <input type="text" class="form-input" id="Email" placeholder="Email" required>
                  </div>
                <div class="col-12 fs-5">
                  <input type="text" class="form-input" id="Message" placeholder="Your message here..." required>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn" id="submit-btn">Submit!</button>
                </div>
              </form>
</template>

<script>
    export default {

    } 
</script>

<style scoped>
    form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #8A5FF5!important;
    border-radius: 10px;

}
.form-input {
    height: 40px;
    border-radius: 5px;
    background-color: #F5B6E1 ;
    outline-style: none;
}

#Email, #Message, #First-name, #last-Name {
    width: 100%
}

#Message {
    height: 80px;
}

#submit-btn {
    background-color:#F5B6E1;
    border: 1px solid black;
    color: black;
}

#submit-btn:hover {
    background-color: #E658D4;
    color: #A129C9;
    border: 1px solid transparent;
}
</style>