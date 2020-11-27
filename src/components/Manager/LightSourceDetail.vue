<template>

	<div class="v1_97">
		<div class="mainWrapper">

			<span class="v19_1">
				Nightlight
			</span>
			<span class="v19_4">
				Light intensity
			</span>
			<div class="lampicon">
				<div class="v19_6">
				</div>
			</div>
			<div class="closebutton">
				<div class="v19_8">
				</div>
				<div class="v19_9">
				</div>
			</div>
				<div class="v19_21">
					<div class="maxlightval">
						<div class="v19_11">
							<div class="v19_12">
							</div>
						</div>
					</div>
					<div class="minlightval">
						<div class="v19_15">
						</div>
						<div class="v19_16">
						</div>
					</div>
					<div class="lightControler">
						<div class="v19_13">
						</div>
						<div class="v19_17">
						</div>
						<div class="v19_20">
						</div>
						<div class="v19_18">
						</div>
					</div>
				</div>
				
				<div class="setlightvalue">
					<div class="lightoff" @click="setLight('off')">
						<div :class="{
							'setoffcolor': this.choosenBlock.func === 'on',
							'setoncolor': this.choosenBlock.func === 'off',
							}">
						</div>
						<span class="v19_43">
						Off
						</span>
					</div>
				<div class="lighton" @click="setLight('on')">
					<div :class="{
							'setoffcolor': this.choosenBlock.func === 'off',
							'setoncolor': this.choosenBlock.func === 'on',
							}">
					</div>
					<span class="v19_49">
						On
					</span>
				</div>
			</div>
		</div>

			<SheduleAdd />
			<span class="deletebutton">
				Delete
			</span>
		</div>
</template>

<script>
import SheduleAdd from '@/components/Manager/SheduleAdd.vue'

export default {
	name: 'LightSourceDetail',
	components: {
		SheduleAdd,
	},
	data: function() {
		return {
			isOn: undefined,
		}
	},
	methods: {
		//nacisniecie On lub Off zmieni aktualnie wyswietlane swiatelko dla wybranego typa
		setLight(val){
			//var temp = manager.lightSource.findIndex(el => el.relay == this.choosenBlock);
			//manager.lightSource[choosenBlock].relay 
			//this.manager.lightSource[this.index].func = val;

			this.choosenBlock.func = val;

			//przypisanie nowej wartosci do calej grupy:
			//1. znajdz grupe pokoi
			var temp = this.allRooms.findIndex(el => el.name == this.name);

			//2. przypisz nowy obiekt
			this.allRooms[temp].lightSources[this.index] = this.choosenBlock;

			//3. zapisz w vuex
			this.$store.commit('setAllRooms', this.allRooms);

			//this.$store.commit('setAllRoms');

			

		}
	},
	computed: {
		choosenBlock(){
			return this.$store.getters.getChoosenBlock;
		},
		name() {
			return this.$store.getters.getCurrentRoomName;
		},
		manager() {
			return this.$store.getters["getRoom"](this.name);
		},
		index() {
			return this.$store.getters.getLightSourceIndex;
		},
		allRooms() {
			return this.$store.getters.getCurrentOptions;
		}
	}
	
}
</script>

<style>

.v1_97 {
  width: 514px;
  max-width: 30%;
  height: 100%;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: fixed;
  z-index: 1;
  float: right;
  top: 0px;
  /*left: 0px;*/
  right:0px;
  box-shadow: -5px 0px 16px rgba(0, 0, 0, 0.10999999940395355);
  overflow-y: scroll;
  overflow-x: hidden;
}

.mainWrapper{
	height:600px;
}


.v19_1 {
  width: 134px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 155px;
  left: 190px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.v19_4 {
  width: 154px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 397px;
  left: 180px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.lampicon {
  width: 70px;
  height: 70px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: relative;
  top: 205px;
  left: 222px;
  overflow: hidden;
}
.v19_6 {
  width: 46px;
  height: 58px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 12px;
}
.closebutton {
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 55px;
  left: 409px;
  overflow: hidden;
}
.v19_8 {
  width: 16px;
  height: 16px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 17px;
}
.v19_9 {
  width: 43px;
  height: 43px;
  background: rgba(36,36,35,1);
  opacity: 1;
  position: absolute;
  top: 3px;
  left: 4px;
}
.v19_21 {
  width: 354px;
  height: 25px;
  /*background: url("../images/v19_21.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 456px;
  left: 80px;
  overflow: hidden;
}
.maxlightval {
  width: 25px;
  height: 25px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 329px;
  overflow: hidden;
}
.v19_11 {
  width: 25px;
  height: 25px;
  /*background: url("../images/v19_11.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v19_12 {
  width: 25px;
  height: 25px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
}
.minlightval {
  width: 18px;
  height: 18px;
  /*background: url("../images/minlightval.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 4px;
  left: 0px;
  overflow: hidden;
}
.v19_15 {
  width: 12px;
  height: 12px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 3px;
  left: 4px;
}
.v19_16 {
  width: 18px;
  height: 18px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
}
.v19_13 {
  width: 25px;
  height: 25px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 176px;
  overflow: hidden;
}
.v19_17 {
  width: 294px;
  height: 2px;
  background: rgba(196,196,196,1);
  opacity: 1;
  position: absolute;
  top: 13px;
  left: 26px;
  overflow: hidden;
}
.v19_20 {
  width: 158px;
  height: 2px;
  background: rgba(245,203,92,1);
  opacity: 1;
  position: absolute;
  top: 13px;
  left: 26px;
  overflow: hidden;
}
.v19_18 {
  width: 15px;
  height: 15px;
  background: rgba(255,186,8,1);
  opacity: 1;
  position: absolute;
  top: 7px;
  left: 181px;
  border-radius: 50%;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.10000000149011612);
}
.deletebutton {
  width: 87px;
  color: rgba(208,0,0,1);
  position: relative;
  top: 100px;
  left: 214px;
  padding-bottom: 30px;;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.setlightvalue {
  width: 368px;
  height: 41px;
  /*background: url("../images/setlightvalue.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 235px;
  left: 73px;
  overflow: hidden;
}
.lightoff {
  width: 140px;
  height: 40px;
  /*background: url("../images/lightoff.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 228px;
  overflow: hidden;
}
.setoffcolor {
  width: 140px;
  height: 40px;
  background: rgba(175,175,175,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v19_43 {
  width: 28px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 8px;
  left: 56px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.lighton {
  width: 140px;
  height: 40px;
  /*background: url("../images/lighton.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 1px;
  left: 0px;
  overflow: hidden;
}
.setoncolor {
  width: 140px;
  height: 40px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 2px solid rgba(255,186,8,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}
.v19_49 {
  width: 23px;
  color: rgba(36,36,35,1);
  position: absolute;
  top: 10px;
  left: 59px;
  font-family: Roboto;
  font-weight: Bold;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}


</style>