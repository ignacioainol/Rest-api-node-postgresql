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
            ['id','ASC']
        ]
    });

    res.json({ tasks });
}

export async function updateTask(req,res){
    const { id } = req.params;
    const { projectid, name, done} = req.body;

    const task = await Task.findOne({
        attributes: ['name','done','projectid','id'],
        where: {id}
    });

    const updateTask = await Task.update({
        name,
        done,
        projectid
    },{
        where:{ id }
    });

    res.json({
        "message":"Task updated Successfully"
    })
}

export async function deleteTask(req,res){
    const { id } = req.params;
    await Task.destroy({
        where:{
            id
        }
    });

    res.json({
        "message": "Task Deleted"
    })

}

export async function getOneTask(req,res){
    const { id } = req.params;
    const task = await Task.findOne({
        where: { id },
        attributes: ['id', 'projectid', 'name', 'done']
    });

    res.json(task);
}


export async function getTaskByProject(req,res){
    const { projectid } = req.params;
    const tasks = await Task.findAll({
        attributes: ['id','projectid','done','name'],
        where:{ projectid }
    });

    res.json(tasks);
}