<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    protected $fillable = ['name'];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function tips()
    {
        return $this->belongsToMany(Tip::class)->withTimestamps();
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class)->withTimestamps();
    }
}
