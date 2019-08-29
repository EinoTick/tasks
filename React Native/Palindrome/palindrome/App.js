import React, { Component } from 'react';
import { Button, View, TextInput, Text, StatusBar } from 'react-native';

class PalindromeTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {100}
      />
    );
  }
}


export default class PalinGramChecker extends Component {
  constructor(props) {
    super(props);
    this.verifyPalindrome = this.verifyPalindrome.bind(this);
    this.resetPalindrome = this.resetPalindrome.bind(this);
    this.state = {
      text: 'Neutral Text!',
      palindromeText: 'Add Palindrome Here!',
      isPalindrome: false,
      isEmptyPalindrome: false,
      containInvalidCharacters: false,


      isAnagram: false,
      testedAnagram: false,
    };
  }

  verifyPalindrome() {
    const palWord = this.state.palindromeText;
    regexCharaters = new RegExp("[^A-Za-z0-9 :;.,!?]");
    var isValid = regexCharaters.test(palWord);
    if(palWord && !isValid){
      reverseWord = palWord.split('').reverse().join('');
      if (reverseWord == palWord) {
        var itIsPalindrome = '"' + palWord + '" is a Palindrome'; 
        this.setState({
          isPalindrome: true,
          isEmptyPalindrome: true,
          containInvalidCharacters: false,
          palindromeText: itIsPalindrome,
        });
      } else {
        var itIsPalindrome = '"' + palWord + '" is not a Palindrome'; 
        this.setState({
          isPalindrome: false,
          isEmptyPalindrome: true,
          containInvalidCharacters: false,
          palindromeText: itIsPalindrome,
        });
      }

    }    
    else if(palWord && isValid){    
      this.setState({
        isPalindrome: false,
        isEmptyPalindrome: true,
        containInvalidCharacters: true,
        palindromeText: palWord,
      });
    }
    else{
      this.setState({
        isPalindrome: false,
        isEmptyPalindrome: false,
        containInvalidCharacters: false,
        palindromeText: '',
      });
    }
  }


  resetPalindrome() {
    this.setState({
      isPalindrome: false,
      isEmptyPalindrome: true,
      containInvalidCharacters: false,
      palindromeText: '',
    });
  }


  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor="green" barStyle="light-content" />          
        </View>


        <View style={{ //Palindrome #####################################################################################################
          backgroundColor: 'lightgray',
          borderBottomColor: 'darkgray',
          borderBottomWidth: 1 }}
        >
          <PalindromeTextInput
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(palindromeText) => this.setState({palindromeText})}
            value={this.state.palindromeText}
          /> 

          <Button
            onPress={this.verifyPalindrome}
            title="Check"
            color="green"
            accessibilityLabel="Check Palindrome!"
          />
          <Button
            onPress={this.resetPalindrome}
            title="Clear"
            color="red"
            accessibilityLabel="Check Palindrome!"
          />
          <View style={{ 
            backgroundColor: this.state.text,
            paddingBottom: 2, 
            height: 35,}}
            >
            {!this.state.isEmptyPalindrome &&          
              <Text>Please, fill the input form!</Text>
            }
            {this.state.containInvalidCharacters &&
              <Text>Invalid Characters! Please use only letters(a-z), numbers(0-9), space and punctuation!!</Text>
            }
            {this.state.isEmptyPalindrome &&
            !this.state.isPalindrome &&
            !this.state.containInvalidCharacters &&
            <Text>Not an Palindrome</Text>
            }
            {this.state.isEmptyPalindrome &&
            this.state.isPalindrome &&
            !this.state.containInvalidCharacters &&
            <Text>It Is a Palindrome!</Text>
            }
          </View>
        </View>

        <View style={{ //Reset #####################################################################################################
          backgroundColor: 'white',
          borderColor: 'darkgray',
          borderWidth: 1,
          height: 300,}}
        >
        </View>

      </View>
    );
  }
}