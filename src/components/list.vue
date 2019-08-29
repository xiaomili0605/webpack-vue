<template>
    <div>
        <h1>{{page}}</h1>
        <ul>
            <li v-for="(item, index) in ary" :key="index">
                名字：{{item.name}} <br>
                年龄：{{item.age}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            page: "list",
            ary: [
                {
                    name: '小米',
                    age: 18
                },
                {
                    name: '小哈',
                    age: 17
                },
                {
                    name: '小艾',
                    age: 14
                }
            ]
        }
    }


}
</script>


<style scoped>
    
</style>