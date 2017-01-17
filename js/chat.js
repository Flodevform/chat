$('document').ready(onReadyHandlerDocument);

function onReadyHandlerDocument(e){
    $('input[name=validePseudo').click(onClickValidePseudo);
    //initChat('Flo');
}

function onClickValidePseudo(e){
    var pseudo = $('input[name=pseudo').val();
    var txtChoose = "Vous devez choisir un pseudo pour entrer dans le chat";
    var txtConfirm = "Vous confirmez vouloir utiliser le pseudo : " + pseudo + " pour le chat ?";
    if(pseudo == ''){
        alert(txtChoose);
    }else{
        if(confirm(txtConfirm)){
            $('#choosePseudo').css('display', 'none');
            $('#contentChat').css('display', 'block');
            
            initChat(pseudo);
        }
    }
}

function initChat(pPseudo){
    recordPseudo(pPseudo);
    searchMessage();
    initListener();
}

function recordPseudo(pPseudo){
    var oParam = {pseudo:pPseudo};
    $.post('ajax/createSession.php', oParam, onSessionCreated, 'json');
}

function onSessionCreated(oData){
    //console.log(oData);
}

function searchMessage(pStartSearch = 0, pEndSearch = 10){
    var oParam = {start:pStartSearch, end:pEndSearch};
    $.getJSON('ajax/findMessage.php', oParam, onMessageSearched);
    setTimeout(searchMessage, '2000');
}

function onMessageSearched(oData){
    //console.log(oData);
    var date;
    var hours;
    var min;
    var sec;
    var txtChat = '';
    var numRow = oData.length;
    for(var i = 0; i < numRow; i++){
        date = new Date(Date.parse(oData[i]["date"]));
        hours = date.getHours();
        min = date.getMinutes();
        min = min < 10 ? '0' + min : min;
        sec = date.getSeconds();
        sec = sec < 10 ? '0' + sec : sec;
        
        txtChat += '<p>' + hours + ':' + min + ':' + sec + ' ';
        txtChat += oData[i]["pseudo"] + ' : ';
        txtChat += oData[i]["message"] + '</p>';
    }
    
    $('#vMessage').html(txtChat);
}

function initListener(){
    $('input[name=validePseudo').unbind('click');
    $('input[name=sendMessage').click(onSendMessageHandler);
    setTimeout(function(){$('#vMessage').scrollTop($('#vMessage').height());}, '100');
}

function onSendMessageHandler(e){
    var txtMessage = $('input[name=message]').val();
    if(txtMessage != ''){
        var oParam = {message:txtMessage};
        $.post('ajax/recordMessage.php', oParam, onMessageRecorded, 'json');
    }
    
    $('input[name=message]').val('');
}

function onMessageRecorded(oData){
    onMessageSearched(oData);
    $('#vMessage').scrollTop($('#vMessage').height());
}