import { Template } from 'meteor/templating';
import { Illus, Graphs } from '../api/domains.js';

import './triangleButton.js';

import './body.html';


Template.body.helpers({
	illus(){ 
		return Illus.find({});
	},
	graphs(){
		return Graphs.find({});
	},
});

