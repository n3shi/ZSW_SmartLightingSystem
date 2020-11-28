<template>
  <div class="scheduleContainer">
    <div 
	:class="{'scheduleContentContaier':scheduleLenght != 0, 'hideConteinter':scheduleLenght == 0}"
	>
      <p class="label">Schedule</p>
      <!-- Miejsce na fora z generowaniem komponentów, póki co trzy na sztywno -->
		<div 
		class="scheduleEventsContainer"
		v-for="(item, index) in schedule"
		:key="index"
		>
        <ScheduleEvent  :schedule='item'/>
		</div>

    </div>
  </div>
</template>

<script>
import ScheduleEvent from "./ScheduleEvent";

export default { 
	components: { ScheduleEvent },
	methods: {
		getNewShedule() {
			console.log(this.name);
			this.sheduleArray = this.$store.commit('getAllShedule', this.name);
			console.log(this.sheduleArray.lenght);
		}
	},
	computed: {
		name() {
			//console.log(this.schedule[0].roomName);
			return this.$store.getters.getCurrentRoomName;
		},
		schedule() {
			//return this.$store.getters["getShedule"](this.name);
			
			return this.$store.getters.getNewShedule;
		},
		scheduleLenght(){
			return this.$store.getters.getNewSheduleLenght;
		}
	}, 
	
	
	};
</script>

<style>
.scheduleContainer {
  width: 100%;
}
.label {
  width: 100%;
}
.scheduleEventsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.scheduleContentContaier {
  width: 80%;
  margin: 0 auto;
}

.hideConteinter{
	display:none;
}

.turbotest{
	width:100px;
	height:100px;
	background-color: red;
}
</style>
