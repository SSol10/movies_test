const options = {
    method: 'GET', //restAPI에 따른 메소드이자 리소스를 조회중...!
    headers: {     //여기는 json방식의 호출과 api 키 값을 넣었음...!
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDBkNGZmNDI4Mjg1YjljM2FjNDg2MjlhN2I5MmUyYSIsInN1YiI6IjY0NzVmMWMxMWJmMjY2MDQzZWNkZGVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77Z9bbZ2GcnUfrheuoGpUoNsHgqTF7l_7GkEI9gDFQY'

    }
};
//api에 요청 보내는중..!!
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())  //api 응답을 json으로 파싱
    .then(data => {
        let mvrow = data['results'];
        const list = document.getElementById('Mvposter');

        function showList(val = '') {   //val이라는 매개변수에 기본값은 빈 문자열로 하였다
            list.innerHTML = "";        //위 Mvposter에 저장된 내용을 지운다...!!

            mvrow.forEach(movie => {    //데이터를 처리하기 위한 콜백함수
                let id = movie.id;
                let title = movie.title;
                let poster_path = movie.poster_path;
                let overview = movie.overview;
                let vote_average = movie.vote_average;

                /* toLowerCase() 를 사용하여 대소문자 구분없이 만들었고 movieId() 함수는 해당 영화의 id를 매개변수로 받아 처리
                   또 영화포스터 이미지를 URL로 설정하고 영화의 제목이나 내용, 평점들을 설정하였음...!!
                */
                if (title.toLowerCase().includes(val.toLowerCase())) {
                    const movieElement = document.createElement("div");
                    movieElement.className = "movieCard";
                    movieElement.innerHTML = `
                        <div onclick="movieId(${id})">
                            <img src="https://image.tmdb.org/t/p/w300/${poster_path}">
                            <p>${title}</p>
                            <p>${overview}</p>
                            <p>Rating : ${vote_average}</p>
                        </div>  `;

                    list.appendChild(movieElement);
                }
            });
        }

        showList();


        // 검색기능을 구현하는데 어려워서 여기저기 찾아보며 많이 헤매었음ㅜㅠ...!!
        // html 관련 요소들 또한 검색구현에 있어 DOM으로 제어할 수 있게 하였음...!!
        const mvInput = document.getElementById("mvInput");
        const mvsearch = document.getElementById("mvsearch");
        // showList 함수를 호출하여 해당 검색어를 포함한 영화 목록을 표시하기로 하였음
        mvsearch.addEventListener("click", (e) => {
            e.preventDefault();
            const val = mvInput.value;
            showList(val);
        })
    })
    .catch(err => console.error(err));
// 영화포스터를 클릭시 id값을 출력하게 해놓았다...!!
const movieId = id => alert(`영화 id : ${id}`);

let inputName = localStorage.getItem("review");
let reviewtext;
let pwd;

function loadReview() {
    for (let i = 0; i < inputName.length;) {
        reviewtext = inputName["inputReviewText"];
        pwd = inputName["inputpwd"];

        const $reviewList = document.createElement("li");
        $reviewList.innerHTML = ``;

        $reviewList.appendChild($reviewList)
    }
}

// 삭제 기능 함수
function deleteReview() {
    if (inputName["inputpwd"] == pwd) {   // 비밀번호 확인
        localStorage.removeItem('객체명'); // 객체 명
    } else {
        alert("비밀번호가 다릅니다");
    }
}
let deleteBtn = document.getElementById('test');
deleteBtn.addEventListener("click", deleteReview);

function deleteReview() {
    console.log("함수 실행");
    confirm('삭제하시겠습니까?'
    ,alert("삭제되었습니다.")//inputName["inputpwd"] == pwd ? localStorage.removeItem("객체명") : alert("비밀번호가 다릅니다.")  
    ,null)

    //inputName["inputpwd"] == pwd ?  true : false
}

$('button[btnType = "del"]').click(function (e) {
    $btndelete.confirm('삭제하시겠습니까?'
        ,inputName["inputpwd"] == pwd ? localStorage.removeItem("객체명") : alert("비밀번호가 다릅니다.")
        ,

    )
});


review = {
    first: {
        id: "one",
        pw: "123a",
    },
    second: {
        id: "two",
        pw: "123b"
    }
}

$('button[btnType="del"]').click(function (e) {
    var rid = this.parentElement.parentElement.parentElement.parentElement.id.split('replyIdNo')[1];
    var content = this.parentElement.parentElement.querySelector('textarea').value;
    //var seq = this.parentElement.parentElement.querySelector('td#reSeq').innerText;
    $ux.cjMessage.confirm('삭제하시겠습니까?', null, function () {
        $ux.data.query({
            id: 'BMP_IDEA_VIEW.REPLY.DELETE',
            version: '00001',
            parameter: {
                IDEAID: IDEAID,
                REPLYID: rid
            },
            reply: function (e) {
                $ux.messageBox('삭제되었습니다.', '');
                initComment();

            }
        });
    });
});
