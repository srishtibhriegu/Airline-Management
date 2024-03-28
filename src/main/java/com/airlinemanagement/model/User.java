package com.airlinemanagement.model;

public class User {

    private String name;
    private String emailId;

    private Password password;

    private Password confirmPassword;

    public  User(String name, String emailId, Password password, Password confirmPassword){
        this.name = name;
        this.emailId = emailId;
        this.password = new Password(password);
        this.confirmPassword = new Password(confirmPassword);
    }

    public User(){
    }

    public String getName(){
        return name;
    }

    public void setName(){
        this.name = name;
    }

    public String getEmailId(){
        return emailId;
    }

    public void setEmailId(){
        this.emailId = emailId;
    }

    public Password getPassword(){
        return  password;
    }
    public void  setPassword(Password password){
        this.password = new Password(password);
    }

    public Password getConfirmPassword(){
        return confirmPassword;
    }
    public void  setConfirmPassword(Password confirmPassword){
        this.confirmPassword = new Password(confirmPassword);
    }


}
