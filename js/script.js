/**
 * Created by inspiron on 2016/8/30.
 */
jQuery(document).ready(function(){
        //打分显示
        var result1 = document.getElementById('leader-result');
        document.getElementById('leader').onchange = function () {
            result1.value = this.value;
        }
        var result2 = document.getElementById('communication-result');
        document.getElementById('communication').onchange = function () {
            result2.value = this.value;
        }
        var result3 = document.getElementById('create-result');
        document.getElementById('create').onchange = function () {
            result3.value = this.value;
        }
        var result4 = document.getElementById('help-result');
        document.getElementById('help').onchange = function () {
            result4.value = this.value;
        }
        var result5 = document.getElementById('task-result');
        document.getElementById('task').onchange = function () {
            result5.value = this.value;
        }

});