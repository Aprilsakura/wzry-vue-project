var obj = {
    getTag: {
        ele: function (element) {
            return document.querySelectorAll(element)
        },
        ids: function (id) {
            return document.getElementById(id)
        }
    },
    setsome: {
        add: function (eles) {
            for (var i = 0; i < eles.length; i++) {
                console.log(eles[i]);
                eles[i].style.border = "1px solid red"
            }
        },
        setcolor: function () {
            for (var i = 0; i < eles.length; i++) {
                console.log(eles[i]);
                eles[i].style.border = "1px solid red"
            }
        }
    }
}
obj.setsome.setcolor()
// obj.setsome.add(obj.getTag.ele('p'))