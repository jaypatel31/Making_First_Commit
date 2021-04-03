var mydata = JSON.parse(data);
		async function exampleFetch() {
			for(var i=0;i<mydata.length;i++){
			    const response = await fetch(`https://api.github.com/users/${mydata[i]['user_id']}`);
			    const json = await response.json();
			    const img_container = document.createElement('div');
				img_container.className = "img_container";
				img_container.setAttribute("id",`user${i}`)
				document.querySelector('.container').appendChild(img_container)
				const user_url = document.createElement('a');
				user_url.href = json.html_url;
				user_url.className = "user_link";
				user_url.setAttribute("id",`user_link${i}`)
				user_url.setAttribute("target","_blank");
				document.querySelector(`#user${i}`).appendChild(user_url)
				const image = document.createElement('img');
				image.src  = json.avatar_url;
				image.className = "avtar";
				document.querySelector(`#user${i} #user_link${i}`).appendChild(image)
				const keyword = document.createElement('div');
				keyword.className = "user_keyword";
				keyword.innerHTML = mydata[i]['keyword'];   
				document.querySelector(`#user${i}`).appendChild(keyword)
		    }
		}
		exampleFetch()	