export class userModel {
  constructor({
    userID,
    roleID,
    collegeID,
    fname,
    mname,
    lname,
    username,
    password,
    status
  }) {
    this.userID = userID;
    this.roleID = roleID;
    this.collegeID = collegeID;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.username = username;
    this.password = password;
    this.status = status;
  }
}
