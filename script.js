// script.js
document.getElementById('year').textContent = new Date().getFullYear();

function encode(s){
  return encodeURIComponent(s).replace(/%20/g, '+');
}

// Build a mailto with the form fields and open the user's mail client.
// This avoids a backend while still "linking" enquiries to your email.
function sendMail(evt){
  evt.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    alert('Please fill name, email and message before sending.');
    return false;
  }

  const to = 'hssmithingenquiries@gmail.com';
  const subject = `Website Enquiry: ${name}`;
  let body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\n---\nSent from HS Smithing website`;
  // encode
  const mailto = `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`;
  // open mail client
  window.location.href = mailto;
  return false;
}

function clearForm(){
  document.getElementById('enquiryForm').reset();
}
