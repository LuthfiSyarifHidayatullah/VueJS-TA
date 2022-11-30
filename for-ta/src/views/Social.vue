<template>
    <div>
        <testAja/>
        <BukuSocial/>
    </div>
</template>

<script>
import testAja from '@/components/test.vue'
import BukuSocial from '@/components/Social.vue'

export default {
    name: 'SocialViews',
    components : {
        testAja,
        BukuSocial
    }
}

</script>