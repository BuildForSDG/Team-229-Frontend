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
        <?php
        if(isset($_GET['survey'])){
            ?>
            <div id="surveybox1" style="display: none;">
                <div>
                    <p>Participant details</p>
                    <label>First Name</label>
                    <input type="text" name="fname" placeholder="e.g Edgar" />
                    <label>Last Name</label>
                    <input type="text" name="lname" placeholder="e.g Ssensalo" />
                    <label>Age</label>
                    <input type="number" name="age" placeholder="e.g 63" />
                    <label>Gender</label>
                    <select>
                        <option value="none">select gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <label>Remarks</label>
                    <textarea placeholder="remarks"></textarea>
                    <div class="dummyButton" onclick="$('#surveybox2')[0].className = 'boxlayout boxborder'; $('#surveybox2')[0].style.display = 'block'; $('#surveybox1')[0].style.display = 'none'; $('#surveybox1')[0].className = ''; box_position();">Next</div>
                </div>
            </div>
            <div class="boxlayout boxborder" id="surveybox2">
                <div>
                    <p>Questions</p>
                    <label>What is your favorite color?</label><br /><br />
                    <div class="answuers">
                        <div>
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="width: 30px;"><input type="radio" name="question1" value="black" /></td>
                                    <td style="vertical-align: baseline;">black</td>
                                </tr>
                                <tr>
                                    <td style="width: 30px;"><input type="radio" name="question1" value="yellow" /></td>
                                    <td style="vertical-align: baseline;">yellow</td>
                                </tr>
                                <tr>
                                    <td style="width: 30px;"><input type="radio" name="question1" value="green" /></td>
                                    <td style="vertical-align: baseline;">green</td>
                                </tr>
                                <tr>
                                    <td style="width: 30px;"><input type="radio" name="question1" value="blue" /></td>
                                    <td style="vertical-align: baseline;">blue</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="dummyButton" onclick="$('#surveybox1')[0].className = 'boxlayout boxborder'; $('#surveybox1')[0].style.display = 'block'; $('#surveybox2')[0].style.display = 'none'; $('#surveybox2')[0].className = ''; box_position();">back</div>
                    <div class="dummyButton">Next</div>
                </div>
            </div>
            <?php
        }
        else if(isset($_GET['history'])){
            ?>

            <?php
        }
        else{
            ?>
            <div class="boxlayout boxborder">
                <div>
                    <div class="logo_section"></div>
                    <div class="bigButton"><a href="home.php?survey">Take Survey</a></div>
                    <div class="bigButton"><a href="home.php?survey">View Survey history</a></div>
                </div>
            </div>
            <?php
        }
        ?>
    </body>
</html>
