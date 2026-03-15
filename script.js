*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Inter;
}

body{
background:#0b0e13;
color:white;
overflow-x:hidden;
}

#progress{
position:fixed;
top:0;
left:0;
height:4px;
background:#00e5ff;
width:0%;
z-index:999;
}

.navbar{
position:fixed;
width:100%;
display:flex;
justify-content:space-between;
padding:20px 60px;
background:rgba(10,10,15,.5);
backdrop-filter:blur(10px);
z-index:10;
}

.navbar ul{
display:flex;
gap:25px;
list-style:none;
}

.navbar a{
text-decoration:none;
color:white;
opacity:.8;
}

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
}

.hero-bg{
position:absolute;
width:100%;
height:100%;
background:url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b") center/cover;
opacity:.25;
}

.hero-content h1{
font-size:80px;
margin-bottom:20px;
}

.wave-transition svg{
display:block;
margin-top:-1px;
}

.section{
padding:120px 80px;
max-width:1200px;
margin:auto;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:40px;
margin-top:60px;
}

.card{
background:#151922;
border-radius:10px;
overflow:hidden;
transition:.4s;
}

.card img{
width:100%;
height:180px;
object-fit:cover;
}

.card h3{
padding:20px;
}

.card p{
padding:0 20px 20px 20px;
opacity:.8;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 20px 40px rgba(0,0,0,.5);
}

.tool-card{
background:#151922;
padding:30px;
border-radius:10px;
}

footer{
text-align:center;
padding:60px;
background:black;
margin-top:80px;
}
