<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-229</title>
        <style><?php foreach(glob('css/*.css') as $file) include($file); ?></style>
        <script><?php foreach(glob('js/*.js') as $file) include($file); ?></script>
    </head>
    <body>
        <div class="boxlayout boxshadow">
            <div>
                <?php
                if(isset($_GET['login'])){
                    ?>
                    <form method="post" action="index.php?login">
                        <p>Admin Login</p>
                        <label>Email</label>
                        <input type="text" name="email" placeholder="peter@example.com" />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="7^FG&FV" />
                        <a href="index.php?login&resetpassword">Forgot password?</a><br />
                        <button type="submit" name="login">Login</button>
                        <a class="link_alt" href="index.php?register">Register</a>
                        <p class="error" style="display: none; clear: both;"><?php echo $error; ?></p>
                    </form>
                    <?php
                }
                else{
                    ?>
                    <form method="post" action="index.php?register">
                        <p>Admin Login</p>
                        <label>First Name</label>
                        <input type="text" name="fname" />
                        <label>Last Name</label>
                        <input type="text" name="lname" />
                        <label>Address</label>
                        <input type="text" name="address" />
                        <label>Email</label>
                        <input type="text" name="email" placeholder="peter@example.com" />
                        <label>Password</label>
                        <input type="password" name="pass1" placeholder="7^FG&FV" />
                        <label>Re-type Password</label>
                        <input type="password" name="pass2" placeholder="7^FG&FV" />
                        <button type="submit" name="login">Register</button>
                        <a class="link_alt" href="index.php?login">Login</a>
                        <p class="error" style="display: none; clear: both;"><?php echo $error; ?></p>
                    </form>
                    <?php
                }
                ?>
            </div>
        </div>
    </body>
</html>
