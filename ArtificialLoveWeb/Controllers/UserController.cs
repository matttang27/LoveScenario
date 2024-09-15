using System;
using Microsoft.AspNetCore.Mvc;
using ArtificialLoveWeb.Services;
using ArtificialLoveWeb.Models;

namespace ArtificialLoveWeb.Controllers;

[Controller]
[Route("api/[controller]")]
public class UserController: Controller {
    
    private readonly MongoDBService _mongoDBService;

    public UserController(MongoDBService mongoDBService) {
        _mongoDBService = mongoDBService;
    }

    [HttpGet("{id}")]
    public async Task<User> GetUser([FromRoute] string id)
    {
        return await _mongoDBService.GetAsync(id);
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user) {
        await _mongoDBService.CreateAsync(user);
        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser([FromRoute] string id,
                                                [FromBody] User user) {
        await _mongoDBService.UpdateAsync(id, user);
        return NoContent();
    }
}