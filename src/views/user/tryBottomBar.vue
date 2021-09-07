<template>
<section class="sect">
<div class="conTainer">
    <div class="lefT"></div>
    <div class="righT">
        <div class="conTent">
            <h1>this is a heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure laudantium quisquam facere tempore quod facilis deserunt nihil cum nam!</p>
            <a href="">Click me</a>
        </div>
    </div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.sect {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(151, 151, 151);

}

.conTainer {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lefT {
    width: 50%;
    min-height: 600px;
    background-color: teal;
}

.righT {
    width: 50%;
    min-height: 400px;
    background-color: thistle;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-left: -150px;
}
</style>