import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
	let now = new Date();
	let date = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}  
	${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
	return (
		<div className={styles.container}>
			<Post message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
			"Atque, non."} likesCounter={25} date={date}/>
			<Post message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
			"Aliquid aspernatur assumenda at consectetur eaque, eligendi fuga itaque " +
			"nesciunt. Cum dolores eum explicabo labore officia vel voluptatum. " +
			"Assumenda at autem corporis culpa nemo neque nesciunt obcaecati quos " +
			"repellat, tempore! Dolor fuga quis vel voluptates? Aliquid aperiam " +
			"consectetur cum, cumque deserunt esse est iste nisi optio placeat " +
			"porro possimus ratione reprehenderit sint sit tempore vero? A ad " +
			"dolore dolores earum expedita facilis fuga fugit inventore iusto " +
			"nam nihil nulla odio porro quaerat quia rem, reprehenderit, " +
			"similique, vero? Ad assumenda autem cum, doloribus enim expedita " +
			"illo, iusto maxime minus mollitia officia officiis placeat porro " +
			"quas quis sit suscipit tempore tenetur ut voluptate? A eaque est " +
			"maxime mollitia nesciunt quibusdam quo repudiandae? Ab alias " +
			"consequatur cum dolore dolorem eaque error, eveniet excepturi minus " +
			"neque nulla reiciendis sequi tenetur. Accusantium animi debitis, " +
			"facere harum illum in laudantium magni minus mollitia nihil odit " +
			"omnis qui quis reiciendis saepe? A dolorem molestias natus nulla, " +
			"numquam odio! Fugiat."} likesCounter={48} date={date}/>
			<Post message={"Lorem ipsum dolor sit amet, consectetur adipisicing " +
			"elit. Corporis dolores earum ex non perspiciatis quia, totam. " +
			"Eum nostrum nulla placeat quis rerum? Adipisci alias consequuntur " +
			"cum dolorem explicabo fuga in incidunt inventore iusto molestias " +
			"porro quibusdam quis rerum saepe vero, vitae voluptas? Asperiores " +
			"debitis dolorem ea eius explicabo fugit laboriosam nam officiis " +
			"similique voluptatibus! Asperiores aspernatur beatae commodi " +
			"consectetur culpa eum fuga, fugiat impedit iure minus mollitia " +
			"odio voluptatem voluptatum."} likesCounter={60} date={date}/>
		</div>
	)
};

export default Posts;