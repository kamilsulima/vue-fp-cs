<template>
<ul class="actions">
        <li @click="moveSectionDown" class="actions-button">Down</li>
        <li @click="moveSectionUp" class="actions-button">Up</li>
        <li @click="moveTo(2,2)" class="actions-button">MoveTo</li>
        <li @click="silentMoveTo(2,2)" class="actions-button">Silent Move</li>
        <li @click="moveSlideRight" class="actions-button">Move right</li>
        <li @click="moveSlideLeft" class="actions-button">Move lef</li>
        <li @click="setAutoScrolling(false)" class="actions-button">Set autoScroll</li>
        <li @click="setFitToSection(false)" class="actions-button">Set fitTo</li>
        <li @click="setAllowScrolling(false)" class="actions-button">Set allowScroll</li>
        <li @click="setKeyboardScrolling(false)" class="actions-button">Set keyboardScroll</li>
        <li @click="setScrollingSpeed(4000)" class="actions-button">setScrollingSpeed</li>
        <li @click="destroy('all')" class="actions-button">Destroy</li>
        <li @click="addSection" class="actions-button">Add section</li>
        <li @click="removeSection" class="actions-button">Remove section</li>
</ul>
</template>
