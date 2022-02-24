$.get("./getProfil.php?name=technet")
.done( function(data){
	profil = jQuery.parseJSON(data);
	$( "#Massimo" ).text(profil.name );
	$( "#icon" ).attr(src","https://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/3015.png""+profil.profileIconId+".png")
	console.log(profil);
	console.log(profil.name);
});
