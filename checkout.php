<?php include('inc/head.php') ?>
<body>

<?php include('inc/header.php') ?>

<Section class="checkout">
	<div class="container">
        <div class="row">
            <div class="col-md-8">
                
            </div>
            <div class="col-md-4"></div>
</div>
	</div>
</Section>

<Section class="checkout">
	<div class="container">
		<h1>Checkout</h1>
		<p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="privacy-policy" target="_blank">privacy policy.</a></p>
		<div class="pay">
			<h2>We Accept</h2>
		<img class="img-fluid" src="assets/img/cards.png"/>
		</div>
		        <?php
        
        if (!empty($_SESSION['error'])) {
            echo '<p class="text-danger alert-danger"> ' . $_SESSION['error'] .
                '</p>';
            unset($_SESSION['error']);
        }
        ?>
    <form method="post" action="trademark-offer/form-bootstrap/payment.php" enctype="multipart/form-data">
    <input type="hidden" name="lead_id" value="<?= $_GET['lead_id'] ?>">
    <input type="hidden" id="package" name="package" value="<?= $_GET['package'] ?>">
    <input type="hidden" id="package_price" name="package_price" value="<?= $_GET['price'] ?>">
            <div class="pay-btn">
                
            	<button type="submit">Proceed to payment</button>
            	<img class="img-fluid" src="assets/img/Icon open-arrow-right.png"/>
            </div>
        </form>
	</div>
</Section> 



<?php include('inc/footer.php') ?>