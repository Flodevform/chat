<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="css/chat.css" />
        <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
        <script type="text/javascript" src="js/chat.js"></script>
    </head>
    <body>
        <header>
            
        </header>
        <div>
            <div id="choosePseudo">
                <form>
                    <label>Pseudo : <input type="text" name="pseudo" /></label>
                    <br/>
                    <input type="button" name="validePseudo" value="Commencer" />
                </form>
            </div>
            <div id="contentChat">
                <div>
                    <div name="viewMessage" id="vMessage">
                        
                    </div>
                    <br/>
                    <div>
                        <form>
                            <input type="text" name="message" />
                            <input type="button" name="sendMessage" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            
        </footer>
    </body>
</html>