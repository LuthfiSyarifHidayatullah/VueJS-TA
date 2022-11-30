<template>
    <div>
        <testAja/>
        <BukuSains/>
    </div>
</template>

<script>
import testAja from '@/components/test.vue'
import BukuSains from '@/components/Sains.vue'


export default {
    name: 'SainsViews',
    components : {
        testAja,
        BukuSains
    }
}

</script>