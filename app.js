let dates = [];
let times = [];

// Chart.jsでグラフを描画する設定
const ctx = document.getElementById('timeChart').getContext('2d');
const timeChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: '陸上タイム（秒）',
            data: times,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',  // 日付をタイム形式に変更
                time: {
                    unit: 'day'
                },
                title: {
                    display: true,
                    text: '日付'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'タイム（秒）'
                }
            }
        }
    }
});

// タイムを追加する関数
function addRecord() {
    const dateInput = document.getElementById('dateInput').value;
    const timeInput = parseFloat(document.getElementById('timeInput').value);

    if (dateInput && !isNaN(timeInput)) {
        // データを追加
        dates.push(dateInput);
        times.push(timeInput);

        // グラフを更新
        timeChart.update();
    } else {
        alert('日付とタイムを正しく入力してください。');
    }
}

