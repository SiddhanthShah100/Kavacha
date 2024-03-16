import React, { useState } from 'react';
import { firestore } from '../../firebase';
import './DeleteAccount.css';

function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !phoneNumber || !reason) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await firestore.collection('deleted_users').add({
        email,
        phoneNumber,
        reason
      });

      console.log('User added successfully');
      setSubmitted(true);

      setEmail('');
      setPhoneNumber('');
      setReason('');
    } catch (error) {
      console.error('Error adding user: ', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Delete Account</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label className="form-label">Email:</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Phone Number:</label>
          <input className="form-input" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Reason to delete:</label>
          <textarea className="form-textarea" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button className="form-submit" type="submit">Submit</button>
      </form>
      {submitted && <div className="submitted-alert">Our team will delete your account soon.</div>}
    </div>
  );
}

export default DeleteAccount;
