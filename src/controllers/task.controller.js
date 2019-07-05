import Task from '../models/Tasks';
import Project from '../models/Project';

export async function createTask(req, res) {
    try {
        const { name, done, projectid } = req.body;
        console.log(req.body);
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
                fields: ['name', 'done', 'projectid']
            });
        return res.json({ message: 'New Task created' });
    }
    catch (error) {
        console.log(error);
    }
};

export async function getTasks(req,res){
    const tasks = await Task.findAll({
        attributes: ['id','projectid','name','done'],
        order:[
            ['id','DESC']
        ]
    });

    res.json({ tasks });
}

export function updateTask(req,res){

}

export function deleteTask(req,res){

}

export function getOneTask(req,res){

}

export function getTaskByProject(req,res){

}