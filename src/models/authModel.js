// models/authModel.js
export const authModel = {
  // Login fields
  username: "",
  password: "",

  // Registration fields
  collegeID: null,  // College ID of the user
  fname: "",        // First Name
  mname: "",        // Middle Name (optional)
  lname: "",        // Last Name

  // -----------------------------
  // Validate registration input
  // -----------------------------
  validateRegister() {
    const errors = [];

    if (!this.collegeID) errors.push("College ID is required.");
    if (!this.fname) errors.push("First name is required.");
    if (!this.lname) errors.push("Last name is required.");
    if (!this.username) errors.push("Username is required.");
    if (!this.password) errors.push("Password is required.");
    if (this.password && this.password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    return errors;
  },

  // -----------------------------
  // Prepare data for service
  // -----------------------------
  toRegisterData() {
    return {
      collegeID: this.collegeID,
      fname: this.fname,
      mname: this.mname || null,
      lname: this.lname,
      username: this.username,
      password: this.password
    };
  }
};
