$(document).ready(function(){

  console.log('r u ready?');



  // get the input amount
  var $cAmount = $('#checking-amount').val();
  $('#checking-amount').on('change', function(){
    if($cAmount !== $(this).val() ){
      $cAmount = $(this).val();
      return $cAmount;
    }
  });


  var $sAmount = $('#savings-amount').val();
  $('#savings-amount').on('change', function(){
    if($sAmount !== $(this).val() ){
      $sAmount = $(this).val();
      return $sAmount;
    }
  });



  // click actions - deposit button

  $('#checking-deposit').on('click', function(){
    gabank.depo( 'checking', Number($cAmount) );
    updateUI();
  });

  $('#savings-deposit').on('click', function(){
    gabank.depo( 'savings', Number($sAmount) );
    updateUI();
  });


  // click actions - withdraw button
  $('#checking-withdraw').on('click', function(){
    gabank.cWid($cAmount);
    updateUI();
  });

  $('#savings-withdraw').on('click', function(){
    gabank.sWid($sAmount);
    updateUI();
  });




  // change the display and background
  var updateUI = function(){

    $('#checking-balance').html('$' + gabank.accounts.checking);
    $('#savings-balance').html('$' + gabank.accounts.savings);

    if(gabank.accounts.checking === 0){
      $('#checking-balance').addClass('zero');
    } else {
      $('#checking-balance').removeClass('zero');
    }

    if(gabank.accounts.savings === 0){
      $('#savings-balance').addClass('zero');
    } else {
      $('#savings-balance').removeClass('zero');
    }

  };


  var gabank = {

    accounts: {
      checking: 0,
      savings: 0
    },  // key

    depo: function(account, amount){
      this.accounts[account] += amount;
      console.log("Deposit. " + account + ": $" + this.accounts[account]);
    }, // key

    cWid: function(amount){
      var cBalance = this.accounts.checking;
      var sBalance = this.accounts.savings;

      if (amount <= cBalance ) {
        cBalance -= amount;
      } else if (amount <= cBalance + sBalance ) {
        sBalance = sBalance + cBalance - amount;
        cBalance = 0;
      } else {
        return;
      }
      console.log("Withdraw. Checking: $" + cBalance + " Savings: $" + sBalance);
      this.accounts.checking = cBalance;
      this.accounts.savings = sBalance;

    }, // key


    sWid: function(amount){
      var cBalance = this.accounts.checking;
      var sBalance = this.accounts.savings;

      if (amount <= sBalance ) {
        sBalance -= amount;
      } else if (amount <= cBalance + sBalance ) {
        cBalance = sBalance + cBalance - amount;
        sBalance = 0;
      } else {
        return;
      }
      console.log("Withdraw. Checking: $" + cBalance + " Savings: $" +  sBalance);
      this.accounts.checking = cBalance;
      this.accounts.savings = sBalance;

    },

  }; // end of object


  updateUI();


}); // end of .ready function
