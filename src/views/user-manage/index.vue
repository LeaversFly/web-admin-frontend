<template>
    <a-card class="general-card" :header-style="{ paddingBottom: 0 }" :body-style="{
        paddingTop: '20px',
    }" :title="$t('workplace.contentData')">
        <template #extra>
            <a-link>{{ $t('workplace.viewMore') }}</a-link>
        </template>
    </a-card>
</template>