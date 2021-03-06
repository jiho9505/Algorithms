const map = [  // 미로
    [0,0,0,1,0],
    [1,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0]
]

const N = map.length;
const M = map[0].length;
const c = Array.from({ length: N }, () => Array(M).fill(0)); // 방문표시

const dx = [ 1, 0, -1, 0 ]; // 하 우 상 좌 
const dy = [ 0, 1, 0, -1 ];

const DFS = (x, y) => {

    if(c[N-1][M-1]){ // x = N-1 , y = M-1 일때 return 해도 ok
        return;
    }

    if(!c[x][y])    c[x][y] = 1; // 방문표시
	
    for (let i = 0; i < 4; i++){
        let next_x = x + dx[i];
        let next_y = y + dy[i];

        if (0 <= next_x && next_x < N && 0 <= next_y && next_y < M) // 미로의 범위
        {
            // 길이 존재하고 이전에 방문했던적이 없는 경우
            if (map[next_x][next_y] === 0 && c[next_x][next_y] === 0) // '1' 조심 상황에 따라.. 
            {
                c[next_x][next_y] = c[x][y] + 1; // 이렇게 안해도 될듯 세번째인자에 
                                                 // c 값 전해주면 위에서 c 갱신 가능
                DFS(next_x,next_y); // 재귀
            }

        }
    }

    return;
}



function solution() {
    DFS(0,0);
    console.log(c[N-1][M-1] - 1) // 1을 빼줘야한다!!
}

solution();

/*
    재귀의 과정을 잘 생각해볼것!
    (0,0)이 제일 마지막에 끝난다.
*/