<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
	<title>Верстка</title>
	<meta name="robots" content="noindex, nofollow" />
	<style>
		body,
		html {
			padding: 0;
			margin: 0;
			background: #f2f2f2;
			color: #444;
			font: normal 16px/1.2 Arial, Helvetica, sans-serif;
		}
		small {
			font-size: 14px;
		}
		a {
			color: #2d7bcb;
			text-decoration: none;
			-webkit-transition: color 0.1s;
			-o-transition: color 0.1s;
			transition: color 0.1s;
		}
		a:hover {
			color: #a53a2b;
		}
		.page {
			padding: 40px 20px;
		}
		.container {
			max-width: 430px;
			margin: 0 auto;
		}
		.content {
			padding: 24px 30px;
			background: #FFF;
		}
		.title {
			margin-bottom: 7px;
			font-size: 40px;
			text-align: center;
		}
		.subtitle {
			margin-bottom: 30px;
			font-size: 24px;
			text-align: center;
		}
		table {
			width: 100%;
			border-collapse: collapse;
		}
		table td,
		table th {
			border-bottom: 1px solid #CCC;
			padding: 11px;
			font-weight: normal;
			text-align: left;
		}
		table tr:last-child td {
			border-bottom: none;
		}
		@media (max-width:500px) {
			.title {
				font-size: 30px;
			}
			.subtitle {
				margin-bottom: 20px;
				font-size: 20px;
			}
			.name-cell {
				display: none;
			}
		}
	</style>
</head>
<body>

	<div class="page">

		<div class="container">

			<div class="title">Верстка</div>
			<div class="subtitle">Список страниц</div>

			<div class="content">

				<?php
					function contains($substring, $string) {
						$pos = strpos($string, $substring);
						if ($pos === false) {
							return false;
						} else {
							return true;
						}
					}
					$counter = 0;
					$files = array();
					$handle = opendir('.');
					while (false !== ($file = readdir($handle))) array_push($files, $file);
					sort($files);
					if (in_array('home.php',$files)){
						$index = array_search('home.php',$files);
						unset($files[$index]);
						array_unshift($files, 'home.php');
					}
				?>

				<table id="pages" class="condensed-table table">
					<thead>
						<tr>
							<th>#</th>
							<th>Название</th>
							<th class="name-cell">Имя файла</th>
						</tr>
					</thead>
					<tbody>
					<?php foreach ($files as $file) { ?><?php if ($file!='.' && $file!='..' && is_dir($file)==false && $file[0]!='_' && $file[0]!='.' && $file!='index.php' && (contains('.htm',$file) || contains('.php',$file))) { ?>
						<tr>
							<td style="width:20px;"><?php echo ++$counter; ?>.</td>
							<td><a href="<?php echo $file; ?>" target="_blank"><?php
									$title = str_replace('-',' ',$file);
									$title = str_replace('_',' ',$title);
									$title = str_replace('.php','',$title);
									$title = str_replace('.html','',$title);
									$title = str_replace('.htm','',$title);
									$title = ucwords($title);
									echo $title; ?></a></td>
							<td class="name-cell"><small><?php echo $file; ?></small></td>
						</tr>
						<?php } ?>
					<?php } ?></tbody>
				</table>

			</div>

		</div>

	</div>

</body>
</html>
