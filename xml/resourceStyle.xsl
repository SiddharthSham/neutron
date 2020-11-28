<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<html>
		<head>
			<title>Resource Data</title>
			<style type="text/css">
            *, *::after, *::before {
                margin: 0;
                padding:0;
                box-sizing: border-box;
            }
			body {
				font-family: Inter, sans-serif;
				background: #8CDCFC;
				padding: 0 calc(100vw / 36);
				max-width: calc(100vw / 36 * 36);
				<!-- margin: 0 auto; -->
				margin-left: 50vw;
				transform: translate3d(-50%, 0, 0);
			}
			h1 {
				text-align: center;
				font-size: 5vw;
				margin: 3rem 0;
			}
			.student {
				display: block;
				margin: 2rem 1rem 0;
				width: calc(100vw / 36 * 7.15);
				float: left;
				border-radius: 7px;
				box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.02);
				background: #fff;
				font-size: 125%;
			}
			ul {
				display: flex;
				flex-direction: column;
				list-style: none;
			}
			li {
				margin-bottom: 0.5rem;
				border-bottom: 1px solid #333;
				padding: 0.25rem 0.5rem;
				display: flex;
			}
			li > span {
				flex-basis: 50%;
			}
			li > span:first-of-type {
				font-weight: 600;
			}
			li:first-of-type {
				padding: 0.5rem 0.25rem;
			}
			li:last-of-type {
				border-bottom: none;
			}
			footer {
				min-height: calc(100vh / 8);
				clear: both;
			}
			</style>
		</head>
		<body>
			<h1>Resource Data</h1>
			<hr></hr>
			<xsl:for-each select="list/resource">
				<ul class="student">
					<li> <span>Title: </span>    <span><xsl:value-of select="Title"/></span> </li>
					<li> <span>ID: </span>       <span><xsl:value-of select="Id"/></span> </li>
					<li> <span>Content:</span>   <span><xsl:value-of select="Content"/></span> </li>
					<li> <span>Timestamp:</span> <span><xsl:value-of select="Timestamp"/></span> </li>
				</ul>
			</xsl:for-each>
		</body>
		<footer></footer>
	</html>
	</xsl:template>
</xsl:stylesheet>