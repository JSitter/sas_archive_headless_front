<?php
    $preloadHeaderColor = '#596478';
    $headerSize = '450px';
    $menuSize = "80px";
    $menuColor = "#333";
    $headerBackgroundPosition = "calc(100vw / -10)";
    $backgroundBlur = "10px";
    $menuBoxShadow = "2px 5px 5px rgba(30, 30, 30, .3)";
    $menuItemWidth = "130px";
?>
<div id="app-body" style="border:0px;margin:0px;padding:0px;">
<header style="width:100%;height:<?php print($headerSize) ?>;background-color:<?php print($preloadHeaderColor) ?>;overflow:hidden;">
    <img src="./assets/seminarycovertiny.jpg" style="width:100%;height:auto;filter:blur(<?php print($backgroundBlur) ?>);margin-top:<?php print($headerBackgroundPosition) ?>;"/>
</header>
<nav style="background-color:<?php print($menuColor) ?>;width:100%;height:<?php print($menuSize) ?>;display:flex;flex-direction:row;box-shadow:0px 3px 5px rgba(30, 30, 30, .6);">
    <?php print(str_repeat('<div style="background-color:#555;height:100%;width:'.$menuItemWidth.';margin: 0px 10px;"></div>', 3)) ?>
</nav>
<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;margin:50px;">
    <div style="width:80%;box-shadow:<?php print($menuBoxShadow) ?>; background-color: #fefefe;margin: auto 50px;border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:90px;margin:50px;">
        <div style="width:30%;height:45px;border-radius:10px;background-color:#e6e6e6;margin:5px 20px 30px -49%;display:absolute;"></div>
        <?php print(str_repeat('<div style="width:80%;height:15px;border-radius:20px;background-color:#e6e6e6;margin:5px 20px;"></div>', 7)) ?>
    </div>
</div>
