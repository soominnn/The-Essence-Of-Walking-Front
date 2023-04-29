<h1>걷기의 정석</h1>
<h3>이용자의 걸음걸이를 딥러닝으로 분석 후 올바른 걸음걸이 분석 및 교정해주는 서비스</h3>
1. 인원: FE 1명(본인), BE 2명
<br>
2. 기술스택: JavaScript, React, Python, TensorFlow, OpenCV, MySQL
<br>
<br>
<img src="https://user-images.githubusercontent.com/86521510/235299514-460aae8c-05ba-47d3-9b4d-54a0e675f000.png" width='100%' height='100%'>
<img src="https://halved-mallet-a7c.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd82cd08f-6713-4017-9673-2c211361ebf7%2F%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25AE%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25B4_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25A8_%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%2580%25E1%2585%25AA.png?id=cc4dcadf-28dd-4d55-8796-7aaf15fcc206&table=block&spaceId=7ed43a74-fe2d-4ce6-8dfd-e51f7330d18a&width=2000&userId=&cache=v2" width='100%' height='100%'>

<h3>나의 역할</h3>
1. VGG19 아키텍처 기반의 OpenPose 오픈소스를 활용하여 걷는 자세 관절의 특징점 추출
<br>
2. 추출한 특징점들을 이어 관절의 각도 계산 후 동영상의 프레임 평균 걸음걸이의 관절 각도 분석 알고리즘 구현
<br>
3. 분석 결과를 웹 Front-end로 시각화
<br>
4. 2023 한국 소프트웨어 종합학술대회 논문 발표, 인공지능 부문 우수상
