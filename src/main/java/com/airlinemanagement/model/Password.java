package com.airlinemanagement.model;

public class Password {
     private String value;

     public Password(Password value){
         if(!isValidPassword(value)){
             throw new IllegalArgumentException("Invalid password format");
         }
        this.value=value;
     }

    public String getValue() {
        return value;
    }

      private boolean isValidPassword(String password){
          if (password.length() < 6) {
              return false;
          }
          // password must contain atLeast one uppercase letter
          if (!password.matches(".*[A-Z].*")) {
              return false;
          }
          // password must contain atLeast one lowercase letter
          if (!password.matches(".*[a-z].*")) {
              return false;
          }
          // password must contain atLeast one digit
          if (!password.matches(".*\\d.*")) {
              return false;
          }
          // password must contain atLeast one special char
          if (!password.matches(".*[!@#$%^&*()-+=\\[\\]{}|<>/?~].*")) {
              return false;
          }

          return true;

      }
}
